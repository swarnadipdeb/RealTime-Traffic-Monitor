package com.res.producer.kafkaProducer.controller;


import jakarta.servlet.http.HttpServletRequest;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Properties;


@RestController
@RequestMapping("/producer")

public class producer {
    private static final String TOPIC_NAME = "course-activity-matrices";

    private final Producer<String, String> kafkaProducer;
    


    public producer(@Value("${spring.kafka.bootstrap-servers}") String BOOTSTRAP_SERVERS) {
        Properties props = new Properties();
        props.put("bootstrap.servers", BOOTSTRAP_SERVERS);
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        this.kafkaProducer = new KafkaProducer<>(props);

    }

    @PostMapping("/event")
    public void sendEventToKafka(@RequestBody String eventData) {
        ProducerRecord<String, String> record = new ProducerRecord<>(TOPIC_NAME, "userEvent", eventData);
        kafkaProducer.send(record, (metadata, exception) -> {
            if (exception != null) {
                System.out.println("Error sending message to Kafka: " + exception.getMessage());
            } else {
                System.out.println("Message sent to Kafka, offset: " + metadata.offset());
            }
        });
    }


    @GetMapping("/health")
    public String healthCheck() {
        return "Server is Running!";
    }
}
