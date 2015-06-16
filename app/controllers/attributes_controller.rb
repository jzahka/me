class AttributesController < ApplicationController
  def index
    @attribute = Attribute.new
    @attributes = Attribute.where(enabled: true).order(:id).all
  end

  def create
    Attribute.create(create_attribute_params)
  end

  def update
    attribute = Attribute.find(params[:id])
    case params[:vote]
    when 'up'
      attribute.up_votes += 1
    when 'down'
      attribute.down_votes += 1
    end
    attribute.save!
    render json: { id: attribute.id, net: attribute.net_votes }
  end

  private
  def create_attribute_params
    params.require(:attribute).permit(:name)
  end
end
