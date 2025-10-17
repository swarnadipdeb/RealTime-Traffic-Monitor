# Stage 1: Build
FROM gradle:8.10.0-jdk21 AS build
WORKDIR /build

# Copy Gradle wrapper and build files
COPY build.gradle .
COPY settings.gradle .
COPY gradle ./gradle

# Copy source code
COPY src ./src

# Build the project (you can use 'build' or 'bootJar' if Spring Boot)
RUN gradle clean build -x test

# (Optional) If you want a smaller runtime image:
# Stage 2: Runtime
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copy the built jar from the build stage
COPY --from=build /build/build/libs/kafkaConsumer-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8089 8090

# Run the application
CMD ["java", "-jar", "app.jar"]

