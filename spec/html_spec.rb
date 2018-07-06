require "pry"

RSpec.describe 'structure' do

  context 'within index.html' do

    it 'contains a <html> tag' do
      html = parsed_html.search('html')[0]
      expect(html).to_not be_nil, "No <html> tag was found"
    end

  end

end
