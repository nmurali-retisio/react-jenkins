pipeline {
    agent { label 'master' }

    tools { nodejs "node" }


    stages {
        stage('install') {
            steps {
                sh "npm install"
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