FactoryGirl.define do
  factory :order do

    total_cents { Faker::Number.between(100, 99999) }
    stripe_charge_id { Faker::Bitcoin.address }
    email { Faker::Internet.email }

    factory :order_with_line_items do
      transient do
        line_item_count 2
      end

      after(:create) do |order, evaluator|
        create_list(:line_item, evaluator.line_item_count, order: order)
        total_cents = order.line_items.reduce(0) { |sum, i| sum + i.total_price_cents }
      end
    end
  end
end
