class PagesController < ApplicationController

  def home
    @posts = Post.where(publish: true).order(:created_at).all
  end
  
end
