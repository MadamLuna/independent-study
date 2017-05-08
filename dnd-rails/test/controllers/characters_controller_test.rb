require 'test_helper'

class CharactersControllerTest < ActionController::TestCase
  setup do
    @character = characters(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:characters)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create character" do
    assert_difference('Character.count') do
      post :create, character: { age: @character.age, alignment: @character.alignment, character_class: @character.character_class, deity: @character.deity, eyes: @character.eyes, gender: @character.gender, hair: @character.hair, height: @character.height, integer,: @character.integer,, level: @character.level, race: @character.race, size: @character.size, status: @character.status, weight: @character.weight, xp: @character.xp }
    end

    assert_redirected_to character_path(assigns(:character))
  end

  test "should show character" do
    get :show, id: @character
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @character
    assert_response :success
  end

  test "should update character" do
    patch :update, id: @character, character: { age: @character.age, alignment: @character.alignment, character_class: @character.character_class, deity: @character.deity, eyes: @character.eyes, gender: @character.gender, hair: @character.hair, height: @character.height, integer,: @character.integer,, level: @character.level, race: @character.race, size: @character.size, status: @character.status, weight: @character.weight, xp: @character.xp }
    assert_redirected_to character_path(assigns(:character))
  end

  test "should destroy character" do
    assert_difference('Character.count', -1) do
      delete :destroy, id: @character
    end

    assert_redirected_to characters_path
  end
end
