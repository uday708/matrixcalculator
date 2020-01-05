class MatrixController < ApplicationController
  include MatrixCalculator

  before_action :load_resource, only: :create

  def create
    if params["a_column_matrix"] != params["b_row_matrix"]
      render json: "Such matrix can not be multiply", status: :bad_request
    else
      render json: {matrix: lookup}.to_json
    end
  end

  def load_resource
    @matrix_a = params[:a].values
    @matrix_b = params[:b].values
  end
end
