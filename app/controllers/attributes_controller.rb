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
    if params[:up_vote] == 'true'
      attribute.up_votes += 1
    else
      attribute.down_votes += 1
    end
    attribute.save!
    render nothing: true
  end

  private
  def create_attribute_params
    params.require(:attribute).permit(:name)
  end
end
