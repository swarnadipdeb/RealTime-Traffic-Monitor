package com.res.producer.kafkaProducer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

public class KafkaProducerApplication {
	public static void main(String[] args) {
		try {
			SpringApplication.run(KafkaProducerApplication.class, args);
		}
		catch(Exception e){
			System.out.println(e.getMessage());
		}
	}

}
