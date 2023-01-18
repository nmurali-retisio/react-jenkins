pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                bat "npm install"
            }
        }
        stage('build') {
            steps {
                bat "npm run build"
            }
        }
         stage('test') {
            steps {
                bat "npm test"
            }
        }
        stage('deploy') {
            steps {
                echo "Code is being deployed"
            }
        }
    }
}