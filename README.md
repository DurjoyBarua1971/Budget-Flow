# Budget Tracker Web Application

A personal finance application to help users track their income and expenses, categorize transactions, and visualize spending patterns over time.

## Project Overview

This budget tracker allows users to:

- Record income and expense transactions
- Categorize transactions with custom categories and icons
- View historical spending data by month and year
- Set preferred currency for transactions
- Visualize financial data through charts and reports

## Database Schema

### User

Stores user identification, managed by Clerk authentication

```
Table User {
  id string [primary key]
  // Persisted on Clerk
}
```

### UserSettings

Stores user preferences

```
Table UserSettings {
  currency string
  userId string [primary key]
}
```

### Category

Custom categories for transactions

```
Table Category {
  createdAt timestamp
  name string
  icon string
  type string
  userId string
  // unique([name, userId, type])
}
```

### Transaction

Individual financial transactions

```
Table Transaction {
  id string [primary key]
  createdAt timestamp
  updatedAt timestamp
  amount number
  description string
  date timestamp
  userId string
  type string
  category string
  categoryIcon string
}
```

### MonthHistory

Aggregated daily financial data

```
Table MonthHistory {
  userId string
  day int
  month int
  year int
  income number
  expense number
}
```

### YearHistory

Aggregated monthly financial data

```
Table YearHistory {
  userId string
  month int
  year int
  income number
  expense number
}
```

### Entity Relationships

```
User.id < UserSettings.userId
User.id < Category.userId
User.id < Transaction.userId
User.id < MonthHistory.userId
User.id < YearHistory.userId
```