package com.res.consumer.kafkaConsumer.Services;

import io.prometheus.client.Counter;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class consumerService {

    private final Counter kafkaEnrollEventCounter;
    private final Counter kafkaPurchaseEventsCounter;

    public consumerService() {
        kafkaEnrollEventCounter = Counter.build()
                .name("kafka_enroll_events_received_total")
                .help("Total number of Kafka enroll events received")
                .register();
        kafkaPurchaseEventsCounter = Counter.build()
                .name("kafka_purchased_events_received_total")
                .help("Total number of Kafka purchase events received")
                .register();
    }


    @KafkaListener(topics = "course-activity-matrices", groupId = "course-activity-metrics-consumer-group")
    public void listen(String eventData) {
        switch (eventData){
            case "course-enrolled":
                kafkaEnrollEventCounter.inc();
                System.out.println("sucessfully published");
                break;
            case "course-purchased":
                kafkaPurchaseEventsCounter.inc();
                System.out.println("sucessfully published");
        }

    }

}
