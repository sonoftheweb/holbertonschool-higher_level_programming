require 'httpclient'
require 'json'

extheaders = {
  'User-Agent' => 'Holberton School',
  'Authorization' => 'token f11ca8ea6bf7bf5456f862debf389d94961bdb15'
}

#to make it cleaner, lets define a function
def make_request(url,headers,query)
  c = HTTPClient.new
  c.get_content(url,query,headers)
end

results = make_request('https://api.github.com/search/repositories?q=language:ruby&sort=stars&order=desc', extheaders, query = nil)
result_array = JSON.parse(results)

#initialize and array
out = []
result_array['items'].each do |name|
  get_location = JSON.parse(make_request(name['owner']['url'],extheaders,nil))
  out << {'full_name' => name['full_name'], 'location' => get_location['location'] }
end

puts out.to_json
