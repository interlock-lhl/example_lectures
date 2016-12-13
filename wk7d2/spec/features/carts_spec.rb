require 'test_helper'

describe "Cart", :type => :feature do

  before :each do
    @product = create(:product)
  end

  it 'a user can add a product to their cart and it updates the cart counter' do
    visit '/'
    click_on 'Add'
    # byebug
    within "#navbar" do
      expect(page).to have_link('My Cart (1)')
    end
    expect(page.current_path).to eq('/')
  end

  it 'a user adds item to cart then goes to the cart page to see their total' do
    visit '/'
    click_on 'Add'
    # byebug
    within "#navbar" do
      click_on('My Cart (1)')
    end

    expect(page.current_path).to eq('/cart')
    expect(page).to have_content(@product.name)
  end
end
