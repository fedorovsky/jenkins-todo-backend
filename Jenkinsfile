pipeline {
    agent any
    stages {
        stage('Stop container') {
            steps {
                sh 'docker stop test-backend || true'
            }
        }
        stage('Remove image') {
            steps {
                sh 'docker rmi test-backend || true'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t test-backend .'
            }
        }
        stage('Run Docker') {
            steps {
                sh 'docker run -d -p 8000:8000 --rm --name test-backend test-backend'
            }
        }
    }
}
