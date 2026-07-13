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
                bat 'docker build -t walemogz/playwright-framework:latest .'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'docker run --rm walemogz/playwright-framework:latest'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    bat 'echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin'
                    bat 'docker push walemogz/playwright-framework:latest'
                }
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