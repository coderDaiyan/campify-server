# Campify

## Introduction

Campify is a ecommerce web application where camping enthusiasis t can buy products for camping

## Project Description

Campify tries to ensure campers can go to tracking easily and fulfill their dreams. They can buy products in cheap price and go for hunting or tracking in their dream destination

## Features

- User can buy products
- User can manage the products
  - Delete product
  - Edit product
- User can create product

## Technology Stack

- Frontend: React, Redux
- Backend: Node.js, Express, MongoDB

## Installation Guideline

Instructions on how to install, configure, and get the project running locally.

### Prerequisites

- Node.js should be installed
- Better to have pnpm

### Installation Steps

1. Clone the project
2. Use the command `pnpm i` to install the dependencies
3. Use `pnpm start:dev` to start the project

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    PORT=5000
    DB_URL=your_db_connection_uri
   ```
3. You can modify the port if you want also you have to create a mongodb cluster in mongodb or you can use localhost for the database connecting string
