require "matrix"

class MatrixController < ApplicationController
  include MatrixCalculator

  before_action :load_resource, only: :create

  def create
    render json: {matrix: lookup}.to_json
  end

  def load_resource
    @matrix_a = params[:a].values
    @matrix_b = params[:b].values
  end
end
