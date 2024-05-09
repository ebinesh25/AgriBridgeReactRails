# -*- encoding: utf-8 -*-
# stub: devise-api 0.1.3 ruby lib

Gem::Specification.new do |s|
  s.name = "devise-api".freeze
  s.version = "0.1.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "changelog_uri" => "https://github.com/nejdetkadir/devise-api/blob/main/CHANGELOG.md", "homepage_uri" => "https://github.com/nejdetkadir/devise-api", "source_code_uri" => "https://github.com/nejdetkadir/devise-api" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["nejdetkadir".freeze]
  s.bindir = "exe".freeze
  s.date = "2023-08-08"
  s.description = "The devise-api gem is a convenient way to add authentication to your Ruby on Rails application using the devise gem. It provides support for access tokens and refresh tokens, which allow you to authenticate API requests and keep the user's session active for a longer period of time on the client side. It can be installed by adding the gem to your Gemfile, running migrations, and adding the :api module to your devise model. The gem is fully configurable, allowing you to set things like token expiration times and token generators.".freeze
  s.email = ["nejdetkadir.550@gmail.com".freeze]
  s.homepage = "https://github.com/nejdetkadir/devise-api".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.7.0".freeze)
  s.rubygems_version = "3.3.5".freeze
  s.summary = "The devise-api gem is a convenient way to add authentication to your Ruby on Rails application using the devise gem. It provides support for access tokens and refresh tokens, which allow you to authenticate API requests and keep the user's session active for a longer period of time on the client side. It can be installed by adding the gem to your Gemfile, running migrations, and adding the :api module to your devise model. The gem is fully configurable, allowing you to set things like token expiration times and token generators.".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<devise>.freeze, [">= 4.7.2"])
    s.add_runtime_dependency(%q<dry-configurable>.freeze, ["~> 1.0", ">= 1.0.1"])
    s.add_runtime_dependency(%q<dry-initializer>.freeze, [">= 3.1.1"])
    s.add_runtime_dependency(%q<dry-monads>.freeze, [">= 1.6.0"])
    s.add_runtime_dependency(%q<dry-types>.freeze, [">= 1.7.0"])
    s.add_runtime_dependency(%q<rails>.freeze, [">= 6.0.0"])
  else
    s.add_dependency(%q<devise>.freeze, [">= 4.7.2"])
    s.add_dependency(%q<dry-configurable>.freeze, ["~> 1.0", ">= 1.0.1"])
    s.add_dependency(%q<dry-initializer>.freeze, [">= 3.1.1"])
    s.add_dependency(%q<dry-monads>.freeze, [">= 1.6.0"])
    s.add_dependency(%q<dry-types>.freeze, [">= 1.7.0"])
    s.add_dependency(%q<rails>.freeze, [">= 6.0.0"])
  end
end
