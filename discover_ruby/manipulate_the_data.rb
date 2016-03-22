require 'httpclient'
require 'json'

extheaders = {
  'User-Agent' => 'Holberton School',
  'Authorization' => 'token f11ca8ea6bf7bf5456f862debf389d94961bdb15'
}

request = HTTPClient.new
results = request.get_content('https://api.github.com/search/repositories?q=language:ruby&sort=stars&order=desc', query = nil, extheaders)
result_array = JSON.parse(results)
puts result_array['items'].map{|name| name['full_name']}.join("\n")
