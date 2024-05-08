Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        # Where the request origins
        origins "*"

        resource "*",
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head]
    end
end