require 'test_helper'

describe "Products", :type => :feature do

  before :each do
    @p = create(:product)
    # @p = Product.create(name: 'Kitten Mittens', price: 999, quantity: 10000000, description: 'Amazing!', category: Category.create(name: 'Kitten Equipment'))
  end

  it "homepage has product" do
    visit '/'

    expect(page).to have_css('.product')
  end

  it "view products details" do
    visit product_path(@p)

    expect(page).to have_content(@p.name)
  end

end
