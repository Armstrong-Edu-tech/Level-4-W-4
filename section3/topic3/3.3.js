const packageName = require('package-name');


app.use(packageName());


const morgan = require('morgan');
app.use(morgan('dev')); // 'dev' is a format showing method, status, response time, etc.



const helmet = require('helmet');
app.use(helmet());



const cors = require('cors');
app.use(cors());



app.use(cors({
  origin: 'http://my-frontend.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
