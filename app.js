const express = require('express');
const users = require('./routes/users');
const visitors = require('./routes/visitors');
const houseHelp = require('./routes/houseHelps');
const securityGuard = require('./routes/securityGuards');

const app = express();
app.use(express.json());

app.use('/api/users', users);
app.use('/api/visitors', visitors);
app.use('/api/househelp', houseHelp);
app.use('/api/securityguard', securityGuard);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
