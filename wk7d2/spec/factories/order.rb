FactoryGirl.define do
  factory :order do
    
    total_cents { Faker::Number.between(100, 99999) }
    stripe_charge_id { Faker::Crypto.md5 }
    email { Faker::Internet.email }

    transient do
      line_item_count 2
    end

    after(:create) do |order, evaluator|
       create_list(:line_item, evaluator.line_item_count, order: order)
     end
  end
end
