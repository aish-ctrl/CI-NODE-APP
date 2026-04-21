pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/aish-ctrl/CI-NODE-APP.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'node test.js'
            }
        }
    }

    post {
        success {
            echo 'CI Pipeline success'
        }
        failure {
            echo 'CI Pipeline failed'
        }
    }
}