


if @user
    json.user do
        json.phone @user.phone
        json.role @user.role
    end

    json.post do
        json.suggested do
            json.array! @nearby_listings do |listing|
                json.title listing.title
                json.price listing.price
                json.quantity listing.quantity
                json.cost listing.price_per_unit * listing.available_quantity
                json.images json.array! do
                    if listing.primary_image.attached?
                        json.url url_for(listing.primary_image)
                    end

                    if listing.additional_image_1.attached?
                        json.url url_for(listing.additional_image_1)
                    end

                    if listing.additional_image_2.attached?
                        json.url url_for(listing.additional_image_2)
                    end
                end
            end
        end

        json.more_posts do 
            json.array! @other_listings do |listing|
                json.title listing.title
                json.price listing.price
                json.quantity listing.quantity
                json.cost listing.price_per_unit * listing.available_quantity
                json.images json.array! do
                    if listing.primary_image.attached?
                        json.url url_for(listing.primary_image)
                    end

                    if listing.additional_image_1.attached?
                        json.url url_for(listing.additional_image_1)
                    end

                    if listing.additional_image_2.attached?
                        json.url url_for(listing.additional_image_2)
                    end
                end
            end
        end
    end
else 
    json.post do
        json.array! @listings do |listing|
                json.title listing.title
                json.price listing.price
                json.quantity listing.quantity
                json.cost listing.price_per_unit * listing.available_quantity
                json.images json.array! do
                    if listing.primary_image.attached?
                        json.url url_for(listing.primary_image)
                    end

                    if listing.additional_image_1.attached?
                        json.url url_for(listing.additional_image_1)
                    end

                    if listing.additional_image_2.attached?
                        json.url url_for(listing.additional_image_2)
                    end
                end
            end
    end

    json.list @listings
end