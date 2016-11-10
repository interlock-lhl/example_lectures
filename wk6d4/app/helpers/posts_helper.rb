module PostsHelper
  def truncate_post_body(post, length=10, eplise='...')
    # 10 - eplise = 7
    actual_length = length - eplise.length
    last_string_index = post.body[0..actual_length].rindex(' ')
    trunced_body = post.body[0..last_string_index] # ignored no spaces bug
    trunced_body + '...'
  end
end
