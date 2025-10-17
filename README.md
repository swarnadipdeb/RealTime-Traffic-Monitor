# 🚦 Real-Time Traffic Monitoring System

A **real-time event tracking and analytics platform** built using **Spring Boot (Gradle)**, **Apache Kafka**, **Prometheus**, **Grafana**, and **ReactJS**.  
This project visualizes how users interact with demo courses in real time — tracking **Enroll** and **Purchase** actions through an event-driven microservices pipeline.

---

## 📖 Overview

This system simulates a course platform where each course has:
- An **Enroll Now** button → triggers an *enroll event*  
- A **Buy Now** button → triggers a *purchase event*

Each event flows through **Kafka → Spring Boot Consumer → Prometheus → Grafana**, enabling real-time insights into user engagement patterns.

---

## 🏗️ System Architecture

```
ReactJS (Frontend)
     ↓
Spring Boot Kafka Producer → Apache Kafka → Spring Boot Kafka Consumer
                                                ↓
                                         Prometheus Metrics
                                                ↓
                                             Grafana
```

---

## ⚙️ Tech Stack

| Layer | Technology | Description |
|-------|-------------|-------------|
| Frontend | **ReactJS** | Handles user interactions (Enroll, Buy) |
| Backend (Producer) | **Spring Boot (Gradle)** | Publishes user event messages to Kafka |
| Message Broker | **Apache Kafka** | Manages event streaming |
| Backend (Consumer) | **Spring Boot (Gradle)** | Consumes messages, exposes Prometheus metrics |
| Monitoring | **Prometheus** | Scrapes and stores consumer metrics |
| Visualization | **Grafana** | Displays real-time analytics dashboards |

---

## 🚀 Features

- 🔁 Real-time tracking of *Enroll* and *Purchase* events  
- ⚙️ Kafka-powered asynchronous event processing  
- 📊 Live metrics via Prometheus and Grafana  
- 🧩 Modular and decoupled architecture (Producer ↔ Consumer)  
- 🐳 Docker Compose for one-command setup  
- 💡 Easy to extend with new events or analytics  

---

## 📂 Project Structure

```
RealTime-Traffic-Monitor/
│
├── frontend/                 # ReactJS + Vite UI
│   ├── src/
│   └── public/
│
├── kafka-producer/           # Spring Boot Kafka Producer (Gradle)
│   ├── build.gradle
│   └── src/main/java/
│
├── kafka-consumer/           # Spring Boot Kafka Consumer (Gradle)
│   ├── build.gradle
│   └── src/main/java/
│
├── prometheus.yml              # Prometheus configuration
│                   
│
└── docker-compose.yml        # One-command full setup
```

---

## ⚙️ Setup Options

You can run this project in **two ways**:
1. **Manual Setup (Full Local Installation)** — setup everything manually on your local machine.  
2. **Docker Setup (Recommended)** — automatic setup using Docker Compose.

---

### 🧩 Option 1: Manual Setup

Follow these steps to run all services **manually** on your system.

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/swarnadipdeb/RealTime-Traffic-Monitor.git
cd RealTime-Traffic-Monitor
```

---

#### 2️⃣ Install & Start Zookeeper and Kafka

**Download Kafka:**  
👉 [Kafka Downloads](https://kafka.apache.org/downloads)

Extract and navigate to the Kafka folder:
```bash
tar -xzf kafka_2.13-3.6.0.tgz
cd kafka_2.13-3.6.0
```

**Start Zookeeper**
```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
```

**Start Kafka Broker**
Open a new terminal:
```bash
bin/kafka-server-start.sh config/server.properties
```

Verify Kafka is running:
```bash
bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

---

#### 3️⃣ Create Kafka Topics (Optional)
```bash
bin/kafka-topics.sh --create --topic enroll-events --bootstrap-server localhost:9092
bin/kafka-topics.sh --create --topic purchase-events --bootstrap-server localhost:9092
```

---

#### 4️⃣ Build and Run Spring Boot Services (Gradle)

**Kafka Producer**
```bash
cd kafka-producer
./gradlew clean build
java -jar build/libs/<producer-jar-file>.jar
```

**Kafka Consumer**
```bash
cd ../kafka-consumer
./gradlew clean build
java -jar build/libs/<consumer-jar-file>.jar
```

> Replace `<producer-jar-file>.jar` and `<consumer-jar-file>.jar` with the actual JAR filenames generated in `build/libs/`.

---

#### 5️⃣ Install and Configure Prometheus

**Step 1: Download Prometheus**  
👉 [Prometheus Download Page](https://prometheus.io/download/)

For Linux/macOS:
```bash
wget https://github.com/prometheus/prometheus/releases/download/v2.54.0/prometheus-2.54.0.linux-amd64.tar.gz
tar xvf prometheus-2.54.0.linux-amd64.tar.gz
cd prometheus-2.54.0.linux-amd64
```

**Step 2: Configure Prometheus**
Edit `prometheus.yml`:
```yaml
global:
  scrape_interval: 5s

scrape_configs:
  - job_name: 'kafka-consumer'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8082']
```

**Step 3: Start Prometheus**
```bash
./prometheus --config.file=prometheus.yml
```

Prometheus UI: [http://localhost:9090](http://localhost:9090)

---

#### 6️⃣ Install and Run Grafana

**Download Grafana:**  
👉 [Grafana Downloads](https://grafana.com/grafana/download)

**Start Grafana:**
```bash
sudo systemctl start grafana-server
# OR
./bin/grafana-server
```

Open Grafana: [http://localhost:3000](http://localhost:3000)

**Login credentials:**
```
Username: admin
Password: admin
```

**Add Prometheus as Data Source:**
```
URL: http://localhost:9090
```

Click **Save & Test**.

---

#### 7️⃣ Run Frontend (ReactJS)
```bash
cd ./ui
npm install
npm start
```
Frontend runs at: [http://localhost:5173](http://localhost:5173)

---

### 🐳 Option 2: Docker Setup (Recommended)

Run everything with one command.

```bash
git clone https://github.com/swarnadipdeb/RealTime-Traffic-Monitor.git
cd RealTime-Traffic-Monitor
docker-compose up -d
```

#### Access Points

| Service | URL | Description |
|----------|-----|-------------|
| **Frontend** | [http://localhost:80](http://localhost:80) | ReactJS demo app |
| **Grafana** | [http://localhost:3000](http://localhost:3000) | Dashboard |
| **Prometheus** | `http://prometheus:9090` (inside Docker) | Data source for Grafana |


Grafana Prometheus URL (inside Docker):  
```
http://prometheus:9090
```

---

## 📊 Example Prometheus Metrics

| Metric Name | Type | Description |
|--------------|------|-------------|
| `kafka_enroll_events_received_total` | Counter | Total enroll events captured |
| `kafka_purchased_events_received_total` | Counter | Total purchase events captured |


---

## 🧠 How It Works

1. User clicks **Enroll Now** or **Buy Now**.  
2. Frontend sends event → **Kafka Producer** → **Kafka Topic**.  
3. **Kafka Consumer** processes event, updates Prometheus counters.  
4. **Prometheus** scrapes metrics.  
5. **Grafana** visualizes real-time analytics.

---

## 🔮 Future Enhancements

- Course-wise & category analytics  
- Historical event data in PostgreSQL  
- Grafana alert rules  

---


## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Swarnadip Deb**  
📧 swarnadip.slg@gmail.com  
🌐 [GitHub Profile](https://github.com/swarnadipdeb)
