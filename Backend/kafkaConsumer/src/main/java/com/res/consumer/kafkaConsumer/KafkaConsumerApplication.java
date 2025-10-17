package com.res.consumer.kafkaConsumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KafkaConsumerApplication {

	public static void main(String[] args) {
		try{
		SpringApplication.run(KafkaConsumerApplication.class, args);
		}catch (Exception e){
			System.out.println(e.getMessage());
		}
	}
}
