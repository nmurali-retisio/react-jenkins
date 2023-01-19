pipeline {
    agent any

    tools { nodejs "nodejs" }

    stages {
        stage('install') {
            steps {
                sh "echo whoami && npm install"
            }
        }
        stage('build') {
            steps {
                sh "npm run build"
            }
        }
         stage('test') {
            steps {
                sh "npm test"
            }
        }
        stage('deploy') {
            steps {
                echo "Code is being deployed"
            }
        }
    }
}