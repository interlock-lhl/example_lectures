require 'test_helper'

describe "Carts", :type => :feature, js: true do

  it "updates cart text when product added" do

    create :product

    visit '/'

    expect(page).to have_content('My Cart (0)')

    click_on 'Add'

    expect(page).to have_content('My Cart (1)')
  end

  it "item added to cart appears on cart page" do
    p = create :product

    visit '/'

    click_on 'Add'

    click_on 'My Cart (1)'

    expect(page).to have_content(p.name)
  end

  it "can purchase item" do
    p = create :product

    visit '/'

    click_on 'Add'

    # click_on 'My Cart (1)'
    visit '/cart'

    click_on 'Pay with Card'

    # within_frame 'iframe[name="stripe_checkout_app"]' do
    #   expect(page).to have_content('Remember me')
    # end
  end

end
