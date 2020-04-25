const express = require('express');
const logger = require('./middleware/logger');

const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// pt-devops api routing
app.use('/ptdevops/api', require('./routes/ptdevops/api'));

// onboarding api routing
app.use('/onboarding/api', require('./routes/onboarding/api'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
