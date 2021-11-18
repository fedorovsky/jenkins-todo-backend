pipeline {
    agent any
    stages {
        stage('Stop container') {
            steps {
                sh 'docker stop todo-backend || true'
            }
        }
        stage('Remove image') {
            steps {
                sh 'docker rmi todo-backend || true'
            }
        }
        stage('Build image') {
            steps {
                sh 'docker build -t todo-backend .'
            }
        }
        stage('Run Docker') {
            steps {
                sh 'docker run -d -p 8000:8000 --rm --name todo-backend todo-backend'
            }
        }
    }
}
