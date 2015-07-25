class AttributesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json do
        render json: MultiJson.dump(
          Attribute.where(enabled: true).
            map{ |a| a.slice(:id, :name, :net_votes) }.
            shuffle
        )
      end
    end
  end

  def create
    Attribute.create(create_attribute_params)
    # don't care if save was successful
    render nothing: true
  end

  def update
    attribute = Attribute.find(params[:id])
    case params[:vote]
    when 'up'
      attribute.up_vote
    when 'down'
      attribute.down_vote
    end
    attribute.save!
    render nothing: true
  end

  private
  def create_attribute_params
    params.require(:attribute).permit(:name)
  end
end
