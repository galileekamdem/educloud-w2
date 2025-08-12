# Educloud W2 - AWS Lambda + API Gateway + API Key

## Description
Ce projet est une fonction AWS Lambda écrite en Node.js et exposée via une API REST AWS API Gateway.
L'API est protégée par une clé API pour contrôler l'accès.

## Technologies utilisées
- AWS Lambda (Node.js 20.x)
- AWS API Gateway
- IAM (AWSLambdaBasicExecutionRole)
- API Key + Usage Plan

## Comment déployer
1. Créer un rôle IAM avec la policy `AWSLambdaBasicExecutionRole`.
2. Créer une fonction Lambda et coller le code `index.js`.
3. Créer une API REST dans API Gateway et l'intégrer à la Lambda.
4. Déployer l'API sur un stage `dev`.
5. Créer une API Key et un Usage Plan, puis associer la clé au stage `dev`.
6. Protéger la méthode GET avec l'option **API Key Required**.
7. Tester avec :

curl -H "x-api-key: <TA_CLE_API>" "https://<invoke-url>/hello?message=Bonjour"
