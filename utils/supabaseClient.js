//allows us to connect to the supabase database

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://kxeogsfnfwlncyachcxm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZW9nc2ZuZndsbmN5YWNoY3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTQ0MTcsImV4cCI6MjA2MDU3MDQxN30.ZG5a-IUm9HTML0tFOXGG-DnBANips7T1DVniHyvetEs';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };