require 'httpclient'

extheaders = {
  'User-Agent' => 'Holberton School',
  'Authorization' => 'token f11ca8ea6bf7bf5456f862debf389d94961bdb15'
}

request = HTTPClient.new
puts request.get_content('https://api.github.com/search/repositories?q=language:ruby&sort=stars&order=desc', query = nil, extheaders)
