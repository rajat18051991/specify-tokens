require('dotenv').config();
const { execSync } = require('child_process');

try {
  execSync('specify pull', { stdio: 'inherit' });
} catch (error) {
  console.error('Error running specify pull:', error.message);
  process.exit(1);
} 