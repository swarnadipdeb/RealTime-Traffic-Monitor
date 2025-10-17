package com.res.consumer.kafkaConsumer.config;
import io.prometheus.client.exporter.HTTPServer;
//import io.prometheus.client.hotspot.DefaultExports;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;

@Configuration
public class prometheusconfig {

        @PostConstruct
        public void init() throws IOException {
           // DefaultExports.initialize();
            HTTPServer server = new HTTPServer(8090);
        }

}
