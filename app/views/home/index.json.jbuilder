if @user
    json.user @user
    
    if @user.profile
        json.user_profile do 
            json.partial! 'profiles/profile', profile: @user.profile 
        end
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