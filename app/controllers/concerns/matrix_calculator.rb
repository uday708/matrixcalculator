module MatrixCalculator

  def lookup
   result = Array.new( params[:a].keys.length ) { Array.new(@matrix_b[0].length ) {0} }
    (0..result.length - 1).each do |i|
      (0..result[0].length - 1).each do |j|
        (0..@matrix_a[0].length - 1).each do |k|
          result[i][j] += @matrix_a[i][k].to_i * @matrix_b[k][j].to_i
        end
      end
    end
    return result
  end
end
