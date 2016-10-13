module PostsHelper

  def truncate_post_body(post, limit=80, continuation='...')
    return post.body unless post.body.length > limit
    i = limit
    while i > 0
      return post.body[0..i-1] + continuation if post.body[i] == ' '
      i = i - 1
    end
    post.body[0..limit] + continuation
  end

end
