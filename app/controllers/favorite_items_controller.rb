class FavoriteItemsController < ApplicationController
    # def update
    #     favorite_item = FavoriteItem.where(listing: Listing.find(params[:listing]), profile_id: current_user.profile.id)
    #     if favorite_item === []
    #         FavoriteItem.create(listing: Listing.find(params[:listing]), profile_id: current_user.profile.id, favorited: true)
    #         @favorite_exists = true
    #     else
    #         favorite_item.destroy_all
    #         @favorite_exists = false
    #     end
    #     render json: favorite_item
    # end

    def toggle_favorite_item
        @profile = Profile.find(params[:profile_id])
        favorite_item = @profile.favorite_items.find_by(listing_id: params[:listing_id])

        if favorite_item
            favorite_item.destroy
            render json: { message: 'Favorite item removed' }
            else
                new_favorite_item = @profile.favorite_items.create(listing_id: params[:listing_id])
                if new_favorite_item.valid?
                    render json: { message: 'Favorite item created' }, status: :created
                else
                    render json: { error: new_favorite_item.errors.full_messages.join(', ') }, status: :unprocessable_entity
                end
            end
        end
    end

    private 
    
    def favorite_item_params
        params.require(:favorite_item).permit(:listing_id, :profile_id, :favorited)
    end