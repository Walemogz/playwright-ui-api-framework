pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t playwright-framework .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker run --rm playwright-framework'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }

        success {
            echo 'All tests passed!'
        }

        failure {
            echo 'Some tests failed.'
        }
    }
}