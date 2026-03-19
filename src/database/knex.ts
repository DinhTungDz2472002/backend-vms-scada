import { knex } from 'knex';
import { Model } from 'objection';
import config from '../../knexfile'; // đường dẫn tới file config của bạn

// 🔥 tạo instance knex
const knexInstance = knex(config);

// 🔥 bind vào objection (QUAN TRỌNG NHẤT)
Model.knex(knexInstance);

console.log('✅ Database connected');

export default knexInstance;