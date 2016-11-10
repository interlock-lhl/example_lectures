class PagesController < ApplicationController

  def home
    @posts = Post.where(publish: true).order(:created_at).all
    @first_post_body = truncate_post_body(@posts.first)
  end

end
