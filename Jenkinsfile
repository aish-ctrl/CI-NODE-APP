pipeline {
    agent any
    stages {
        stage('Clone REpository') {
            steps {

                git  'https://github.com/aish-ctrl/CI-NODE-APP'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                bat 'node app.js'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'node test.js'
            }
        }
    }

    post {
        sucess {
             echo 'CI Pipeline sucess'
        }
        fail {
             echo 'CI Pipeline failed'
        }
    }
}