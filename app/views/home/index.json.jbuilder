if @user
    json.user do
        json.phone @user.phone
        json.role @user.role
    end
    json.post do
        json.suggested do
            json.array! @nearby_listings, partial: 'listings', as: :listing 
        end
        json.more_posts do 
            json.array! @other_listings , partial: 'listings', as: :listing 
        end
    end
else 
    json.post do
        json.array! @listings, partial: 'listings', as: :listing 
    end
    json.list @listings
end