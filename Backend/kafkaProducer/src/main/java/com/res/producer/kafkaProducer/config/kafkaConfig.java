package com.res.producer.kafkaProducer.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.config.TopicBuilder;

@Configuration
public class kafkaConfig {

//    @Bean
//    public  NewTopic kafkaTopic(String topicName){
//        return TopicBuilder.name(topicName).build();
//    }
}
