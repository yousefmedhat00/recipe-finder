//allows us to connect to the supabase database

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'url';
const supabaseKey = 'key';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;