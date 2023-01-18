pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                bat "npm install"
            }
        }
         stage('test') {
            steps {
                bat "npm run cypress:run"
            }
        }
        stage('deploy') {
            steps {
                echo "Code is being deployed"
            }
        }
    }
}